"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDBEGoChargerImpl = void 0;
class InfluxDBEGoChargerImpl {
    static getInfluxDB(data) {
        const influxElement = {
            measurement: "EGoChargerStatus",
            fields: {
                chargedEnergy: parseFloat(data.dws) / 360000,
                totalChargedEnergy: parseFloat(data.eto) / 10,
                temperature: parseFloat(data.tmp),
                powerL1: data.nrg[7] * 100,
                powerL2: data.nrg[8] * 100,
                powerL3: data.nrg[9] * 100,
                status: parseInt(data.car),
                rebootCtr: parseInt(data.rbc),
                allowCharging: (data.alw === "1" ? true : false)
            }
        };
        return influxElement;
    }
}
exports.InfluxDBEGoChargerImpl = InfluxDBEGoChargerImpl;
//# sourceMappingURL=InfluxDBEGoCharger.js.map