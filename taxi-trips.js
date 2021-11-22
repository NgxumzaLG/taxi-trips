module.exports = function(pool) {

    async function totalTripCount() {
        const counter = await pool.query('SELECT COUNT(*) FROM trips');

        return counter.rows[0].count;
    }

    async function findAllRegions() {
        const allRegions = await pool.query('SELECT * FROM regions');
        const results = allRegions.rows;

        return results.map(region => region.name);
    }

    async function findTaxisForRegion(theRegion) {
        const findThem = await pool.query(`SELECT reg_number FROM regions 
                                        INNER JOIN taxis ON regions.id = taxis.taxi_region_id
                                        WHERE name = $1`, [theRegion]);

        const findThemResults = findThem.rows;
        return findThemResults.map(taxi => taxi.reg_number);
    }

    async function findTripsByRegNumber(reg_no) {
        const tripsByRegNumber = await pool.query(`SELECT route_id FROM taxis
                                                INNER JOIN trips ON taxis.id = trips.taxi_id
                                                INNER JOIN routes ON trips.route_id = routes.id
                                                WHERE reg_number = $1`, [reg_no]);

        const tripsResults = tripsByRegNumber.rows;
        return tripsResults.map(trips => trips.route_id);
    }

    async function findTripsByRegion(theRegion) {
        const totalTripsByRegion = await pool.query(`SELECT COUNT(*) FROM regions
                                                    INNER JOIN taxis ON regions.id = taxis.taxi_region_id
                                                    INNER JOIN trips ON taxis.taxi_region_id = trips.taxi_id
                                                    WHERE name = $1`, [theRegion]);

        return totalTripsByRegion.rows[0].count;
    }

    async function findIncomeByRegNumber(reg_no) {
        const totalIncomeByRegNumber = await pool.query(`SELECT SUM(fare) AS total_income FROM taxis
                                                    INNER JOIN trips ON taxis.id = trips.taxi_id
                                                    INNER JOIN routes ON trips.route_id = routes.id
                                                    WHERE reg_number = $1`, [reg_no]);

        return totalIncomeByRegNumber.rows[0].total_income;
    }

    async function findTotalIncome() {
        const grossTaxiIncome = await pool.query(`SELECT SUM(fare) AS gross_income FROM trips
                                                INNER JOIN routes ON trips.route_id = routes.id`);

        return grossTaxiIncome.rows[0].gross_income;
    }

    async function findTotalIncomePerTaxi() {
        const totalIncomePerTaxi = await pool.query(`SELECT reg_number, SUM(fare) as total_income FROM taxis
                                                    INNER JOIN trips ON taxis.id = trips.taxi_id
                                                    INNER JOIN routes ON trips.route_id = routes.id
                                                    GROUP BY reg_number LIMIT 3`);

        return totalIncomePerTaxi.rows;
    }

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncome,
        findTotalIncomePerTaxi
    }
	
}