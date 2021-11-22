let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/taxi_trips_test';

const pool = new Pool({
    connectionString,
	ssl : {
		rejectUnauthorized:false
	}
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {
        
    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.equal(45, await taxiTrips.totalTripCount());
    

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(['Durban', 'Cape Town', 'Gauteng'], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(['ND 21514', 'ND 36729', 'ND 42203'], await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual(['CA 031-021', 'CA 082-721', 'CA 691-963', 'CA 123-456'], await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual(['LGN 418 GP', 'SOS 971 GP', 'LOY 202 GP', 'BBC 123 GP'], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual([7, 7, 7, 7, 7], await taxiTrips.findTripsByRegNumber('LGN 418 GP'));
        assert.deepStrictEqual([5, 5, 5], await taxiTrips.findTripsByRegNumber('CA 123-456'));

    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.equal(12, await taxiTrips.findTripsByRegion('Cape Town'));
        assert.equal(20, await taxiTrips.findTripsByRegion('Gauteng'));
        assert.equal(12, await taxiTrips.findTripsByRegion('Durban'));

    });

    it('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.equal(80.00, await taxiTrips.findIncomeByRegNumber('LOY 202 GP'));
        assert.equal(75.00, await taxiTrips.findIncomeByRegNumber('ND 42203'));

    });

    it('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{reg_number: 'ND 42203', total_income: '75.00'}, 
                            {reg_number: 'LOY 202 GP', total_income: '80.00'}, 
                            {reg_number: 'CA 082-721', total_income: '58.00'}], await taxiTrips.findTotalIncomePerTaxi());

    });

    it('find the total income for all the taxis', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.equal(566.50, await taxiTrips.findTotalIncome());
    });


    after(function () {
        pool.end();
    });

});