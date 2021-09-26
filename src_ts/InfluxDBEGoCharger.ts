import { EGoChargerMqqtType } from "./EGoChargerMqqtType";
import { InfluxDBBatchElement } from "./InfluxDBBatchElement";

interface InfluxDBEGoCharger extends InfluxDBBatchElement {
    fields: {
        chargedEnergy: number;
        totalChargedEnergy: number;
        temperature: number;
        powerL1: number;
        powerL2: number;
        powerL3: number;
        /**
        Status PWM Signaling
        1: charging station ready, no vehicle
        2: vehicle loads
        3: Waiting for vehicle
        4: Charge finished, vehicle still connected
        */
        status: number;
        rebootCtr: number;
        allowCharging: boolean;
    }
}

class InfluxDBEGoChargerImpl {
    public static getInfluxDB(data: EGoChargerMqqtType): InfluxDBEGoCharger {
        const influxElement: InfluxDBEGoCharger = {
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
        }

        return influxElement;
    }
}

export { InfluxDBEGoCharger, InfluxDBEGoChargerImpl };