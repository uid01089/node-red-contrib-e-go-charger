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
                powerL1: data.nrg[7] / 10,
                powerL2: data.nrg[8] / 10,
                powerL3: data.nrg[9] / 10,
            }
        };
        return influxElement;
    }
}
exports.InfluxDBEGoChargerImpl = InfluxDBEGoChargerImpl;
//# sourceMappingURL=InfluxDBEGoCharger.js.map