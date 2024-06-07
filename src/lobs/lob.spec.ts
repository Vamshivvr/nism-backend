// import { createBatch, fetchLobs } from '.';
// describe('Sample tests', () => {
//     beforeAll(() => {
//         console.log(`Before all tests`);
//     })
//   it('should be true', () => {
//     expect(true).toBe(true);
//   });

//   it('should save lobs', async () => {
//     // setup.

//     // Perform action.
//     await createBatch([{
//       name: 'lob1',
//       minimumEligibilityLevel: 'M1',
//       certificationType: 'A2',
//       levels: 'M1, M2, M3, M4',
//     }]);

//     // Assert expected results.
//     const batches = await fetchLobs();
//     expect(batches.length).toBe(1);
//     const batch = batches[0];

//     expect(batch.id).toBeDefined();
//     expect(batch.name).toBe('lob1');
//     expect(batch.minimumEligibilityLevel.name).toBe('M1');

//     expect(batch.levels.length).toBe(4);
//     expect(batch.levels[0].id).toBeDefined();
//     expect(batch.levels[0].name).toBe("M1");
//   });
// });

import { createBatch, fetchLobs } from '.';
import sequelize from '../models';
import { LOB, LOBLevel, Level } from '../models/Lob';
import { Designation } from '../models/designation';

describe('Sample tests', () => {
  beforeAll(async () => {
    console.log('Before all tests');
    await sequelize.sync(); // Recreate the database schema

    // Pre-create a minimum eligibility level
    await LOBLevel.create({
      lobId: 1,
      level: 'M1',
      eligible: 'true'
    } as LOBLevel);
  });

  it('should be true', () => {
    expect(true).toBe(true);
  });

  it('should save lobs', async () => {
    // Perform action.
    await createBatch([{
      name: 'lob1',
      minimumEligibilityLevel: 'M1',
      certificationType: 'A2',
      levels: ['M1', 'M2', 'M3', 'M4'], // Changed to array
      designation: 'designation1'
    }]);

    // Assert expected results.
    const batches = await fetchLobs();
    expect(batches.length).toBe(1);
    const batch = batches[0];

    expect(batch.id).toBeDefined();
    expect(batch.name).toBe('lob1');

    const minEligibilityLevel = await LOBLevel.findByPk(batch.minimumEligibilityLevel);
    if (minEligibilityLevel) {
      expect(minEligibilityLevel.level).toBe('M1');
    expect(minEligibilityLevel.level).toBe('M1');
    } else {
      throw new Error('Minimum eligibility level not found');
    }
    expect(batch.designation).toBe('designation1');
    expect(batch.levels.length).toBe(4);
    expect(batch.levels[0].id).toBeDefined();
    expect(batch.levels[0].level).toBe('M1');

  });
});
