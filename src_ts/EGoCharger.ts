import { EGoChargerMqqtType } from "./EGoChargerMqqtType";
import { InfluxDBEGoCharger, InfluxDBEGoChargerImpl } from "./InfluxDBEGoCharger";




class EGoCharger {

    constructor() {
        //
    }


    getMessageForInfluxDb(message: EGoChargerMqqtType): InfluxDBEGoCharger {
        return InfluxDBEGoChargerImpl.getInfluxDB(message);
    }

}

export { EGoCharger };