
// import sequelize from '../models';
// import { LOB } from '../models/Lob';
// export async function createBatch(lobs: any[]): Promise<any> {
//     const levels = lobs.map(lob => lob.levels).flat();

//     // Construct the levels and populate the database.


//     return await sequelize.models.LOB.bulkCreate(lobs);
// }

import { Designation } from '../models/designation';
import { Attributes, CreationAttributes } from 'sequelize';


import sequelize from '../models';
import { LOB, LOBLevel, Level } from '../models/Lob';

export async function createBatch(lobs: any[]): Promise<LOB[]> {
  const createdLobs = await sequelize.transaction(async (transaction) => {
    const results: LOB[] = [];

    for (const lob of lobs) {
      // Ensure minimumEligibilityLevel exists in LOBLevel
      const minEligibilityLevel = await LOBLevel.findOne({
        where: { level: lob.minimumEligibilityLevel },
        transaction
      });

      if (!minEligibilityLevel) {
        throw new Error(`Minimum eligibility level ${lob.minimumEligibilityLevel} not found in LOBLevel`);
      }

      const createdLob = await LOB.create({
        name: lob.name,
        minimumEligibilityLevel: minEligibilityLevel.id, // Use the ID of the found level
        certificationType: lob.certificationType,
        designation: lob.designation
      }  as CreationAttributes<LOB>, { transaction });

      const lobLevel = lob.levels.map((level: string) => ({
        lobId: createdLob.id,
        level,
        eligible: 'true' // Assuming a default value for eligible
      }));

      const createdLobLevels = await LOBLevel.bulkCreate(lobLevel, { transaction });

      // Create Levels for each LOBLevel
      for (const lobLevel of createdLobLevels) {
        const levels = lob.levels.map((level: string) => ({
          lobLevelId: lobLevel.id,
          name: level
        }));
        await Level.bulkCreate(levels, { transaction });
      }

      if (lob.designations) {
        const designations = lob.designations.map((designation: string) => ({
          lobId: createdLob.id,
          name: designation
        }));
        await Designation.bulkCreate(designations, { transaction });
      }


      results.push(createdLob);
    }

    return results;
  });

  return createdLobs;
}

// export async function fetchLobs(): Promise<Array<LOB>> {
//     return await sequelize.models.LOB.findAll();
// }

export async function fetchLobs(): Promise<LOB[]> {
  return await LOB.findAll({
    include: [
      { model: LOBLevel, as: 'levels', include: [Level] },
      { model: Designation, as: 'designations' },
    ]
  });
}
