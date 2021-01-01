import { EGoChargerMqqtType } from "./EGoChargerMqqtType";
import { InfluxDBBatchElement } from "./InfluxDBBatchElement";
import { InfluxDBEGoChargerImpl } from "./InfluxDBEGoCharger";




class EGoCharger {

    constructor() {
        //
    }


    getMessageForInfluxDb(message: EGoChargerMqqtType): InfluxDBBatchElement[] {
        const influxElements: InfluxDBBatchElement[] = [];

        influxElements.push(InfluxDBEGoChargerImpl.getInfluxDB(message));

        return influxElements;
    }

}

export { EGoCharger };