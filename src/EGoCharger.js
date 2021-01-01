"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EGoCharger = void 0;
const InfluxDBEGoCharger_1 = require("./InfluxDBEGoCharger");
class EGoCharger {
    constructor() {
        //
    }
    getMessageForInfluxDb(message) {
        return InfluxDBEGoCharger_1.InfluxDBEGoChargerImpl.getInfluxDB(message);
    }
}
exports.EGoCharger = EGoCharger;
//# sourceMappingURL=EGoCharger.js.map