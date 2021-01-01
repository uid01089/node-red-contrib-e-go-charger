//https://github.com/goecharger/go-eCharger-API-v1/blob/master/go-eCharger%20API%20v1%20EN.md

interface EGoChargerMqqtType {
    /**
     JSON Format.
    "B": normal case
    "C": When end-to-end encryption is enabled
    */
    version: string;
    /**
     Current time, formatted as ddmmyyhhmm
    0104191236 corresponds to 01.04.2019 12:36
    */
    tme: string;
    /**
     reboot_counter: Counts the number of boot operations. Sent with end-to-end encryption as protection against replay attacks.
    */
    rbc: string;
    /**
    reboot_timer: Counts the milliseconds since the last boot. Sent with end-to-end encryption as protection against replay attacks.
    Expires after 49 days, increasing the reboot_counter.
    */
    rbt: string;
    /**
    Status PWM Signaling
    1: charging station ready, no vehicle
    2: vehicle loads
    3: Waiting for vehicle
    4: Charge finished, vehicle still connected
    */
    car: string;
    /**
     Ampere value for the PWM signaling in whole ampere of 6-32A
    */
    amp: string;
    /**
    error:
    1: RCCB (Residual Current Device)
    3: PHASE (phase disturbance)
    8: NO_GROUND (earthing detection)
    10, default: INTERNAL (other)
    */
    err: string;
    /**
     access_state: Access control.
    0: open
    1: RFID / App needed
    2: electricity price / automatic
    */
    ast: string;
    /**
     allow_charging: PWM signal may be present
    0: no
    1: yes
    */
    alw: string;
    /**
     stop_state: Automatic shutdown
    0: deactivated
    2: switch off after kWh
    */
    stp: string;
    /**
     Typ2 Cable Ampere encoding
    13-32: Ampere Codierung
    0: no cable
    */
    cbl: string;
    /**
     Phasen before and after the contactor
    binary flags: 0b00ABCDEF
    A ... phase 3, in front of the contactor
    B ... phase 2 in front of the contactor
    C ... phase 1 in front of the contactor
    D ... phase 3 after the contactor
    E ... phase 2 after the contactor
    F ... phase 1 after the contactor
    Example: 0b00001000: Phase 1 is available
    Example: 0b00111000: Phase1-3 is available
    */
    pha: string;
    /**
    Temperature of the controller in °C
    */
    tmp: string;
    /**
     
    */
    tma?: (number)[] | null;
    /**
     
    */
    amt: string;
    /**
     Charged energy in deca-watt seconds
    Example: 100'000 means, 1'000'000 Ws (= 277Wh = 0.277kWh)
    were charged during this charging process.
    */
    dws: string;
    /**
     Abschaltwert in 0.1kWh if stp==2, for dws parameter
    Example: 105 for 10,5kWh
    Charging station logic: if(dwo!=0 && dws/36000>=dwo)alw=0
    */
    dwo: string;
    /**
     adapter_in: Charging box is plugged in with adapter
    0: NO_ADAPTER
    1: 16A_ADAPTER
    */
    adi: string;
    /**
     unlocked_by: Number of the RFID card that has activated the
    current charging process
    */
    uby: string;
    /**
     energy_total: Total charged energy in 0.1kWh
    Example: 130 means 13kWh charged
    */
    eto: string;
    /**
     wifi_state: Wi-Fi connection status
    3: connected
    default: not connected
    */
    wst: string;
    /**
     
    */
    txi: string;
    /**
    Array with values of the current and voltage sensor
    nrg [0]: voltage on L1 in volts
    nrg [1]: voltage on L2 in volts
    nrg [2]: voltage on L3 in volts
    nrg [3]: voltage to N in volts
    nrg [4]: Ampere on L1 in 0.1A (123 equals 12.3A)
    nrg [5]: Ampere on L2 in 0.1A
    nrg [6]: Ampere on L3 in 0.1A
    nrg [7]: power on L1 in 0.1kW (36 equals 3.6kW)
    nrg [8]: power on L2 in 0.1kW
    nrg [9]: power at L3 in 0.1kW
    nrg [10]: power at N in 0.1kW
    nrg [11]: Total power in 0.01kW (360 equals 3.6kW)
    nrg [12]: power factor on L1 in%
    nrg [13]: power factor on L2 in%
    nrg [14]: power factor on L3 in%
    nrg [15]: Power factor on N in%

    App logic:
    if(Math.floor(pha/8) ==1 &&
    parseInt(nrg[3])>parseInt(nrg[0])){
    nrg[0]=nrg[3]
    nrg[7]=nrg[10]
    nrg[12]=nrg[15]
    }
    */
    nrg?: (number)[] | null;
    /**
     Firmware Version
    Example: "020-rc1"
    */
    fwv: string;
    /**
     Serial number number formatted as %06d
    Example: "000001"
    */
    sse: string;
    /**
     WiFi SSID
    Example: "My home network"
    */
    wss: string;
    /**
     WiFi Key
    Example: "****" for fwv after 020
    Example: "password" for fwv before 020
    */
    wke: string;
    /**
     wifi_enabled: Wi-Fi enabled
    0: deactivated
    1: activated
    */
    wen: string;
    /**
Cloud disabled
0: cloud enabled
1: cloud disabled
    */
    cdi: string;
    /**
     ime_offset: Time zone in hours for internal battery-powered clock +100
    Example: 101 is GMT +1
    */
    tof: string;
    /**
     Daylight saving time offset (Summer time) in hours
    Example: 1 for Central Europe
    */
    tds: string;
    /**
     LED brightness from 0-255
    0: LED off
    255: LED brightness maximum
    */
    lbr: string;
    /**
     Minimum number of hours in which to load with "electricity price - automatic"
    Example: 2 ("Car is full enough after 2 hours")
    */
    aho: string;
    /**
     Hour (time) in which with "electricity price - automatically" the charge must have lasted at least aho hours.
    Example: 7 ("Done until 7:00, so before at least 2 hours loaded")
    */
    afi: string;
    /**
     Awattar price zone
    0: Austria
    1: Germany
    */
    azo: string;
    /**
     Absolute max. Ampere: Maximum value for ampere setting
    Example: 20 (can not be set to more than 20A in the app)
    */
    ama: string;
    /**
     Ampere Level 1 for push button on the device.
    6-32: Ampere level activated
    0: level deactivated (is skipped)
    */
    al1: string;
    /**
     Ampere Level 2 for push button on the device.
    Must be either 0 or >al1
    */
    al2: string;
    /**
      Ampere Level 3 for push button on the device.
    Must be either 0 or >al2
    */
    al3: string;
    /**
     Ampere Level 4 for push button on the device.
    Must be either 0 or >al3
    */
    al4: string;
    /**
     Ampere Level 5 for push button on the device.
    Must be either 0 or >al4
    */
    al5: string;
    /**
  Color idle: color value for standby (no car plugged in) as a number
Example: parseInt ("# 00FFFF"): 65535 (blue / green, default)
    */
    cid: string;
    /**
 Color charging: color value for charging active, as a number
Example: parseInt ("# 0000FF"): 255 (blue, default)
    */
    cch: string;
    /**
 Color idle: color value completed for charging, as a number
Example: parseInt ("# 00FF00"): 65280 (green, default)
    */
    cfi: string;
    /**
 led_save_energy: Turn off the LED automatically after 10 seconds
0: Energy saving function deactivated
1: Energy saving function activated
    */
    lse: string;
    /**
  unlock_state: Cable lock adjustment
0: lock as long as the car is plugged in
1: Automatically unlock after charging
2: Always leave the cable locked
    */
    ust: string;
    /**
 WiFi Hotspot Password
Example: "abdef0123456"
    */
    wak: string;
    /**
 Flags
0b1: HTTP Api in the WLAN network activated (0: no, 1: yes)
0b10: End-to-end encryption enabled (0: no, 1: yes)
    */
    r1x: string;
    /**
 Remaining time in milliseconds remaining on activation by
electricity prices
App logic:
if(json.car==1)message = "Zuerst Auto anstecken"
else message = "Restzeit: …"
    */
    dto: string;
    /**
 Norway mode activated
0: deactivated (earthing detection activated)
1: activated (no earthing detection, intended only for IT
    */
    nmo: string;
    /**
 Scheduler settings (base64 encoded)
Functions for encode and decode are here:
https://gist.github.com/peterpoetzi/6cd2fad2a915a2498776912c5aa137a8
The settings can be set in this way:
r21=Math.floor(encode(1))
r31=Math.floor(encode(2))
r41=Math.floor(encode(3))
Direct setting of sch = is not supported
    */
    sch: string;
    /**
  Scheduler double press: Activates charge after double pressing the
button if the load has just been interrupted by the scheduler
0: Function disabled
1: Allow charge immediately
    */
    sdp: string;
    /**
 Charged energy per RFID card from 1-10
Example: eca == 1400: 140kWh charged on card 1
Example: ec7 == 1400: 140kWh charged on board 7
Example: ec1 == 1400: 140kWh charged on card 10
    */
    eca: string;
    ecr: string;
    ecd: string;
    ec4: string;
    ec5: string;
    ec6: string;
    ec7: string;
    ec8: string;
    ec9: string;
    ec1: string;
    /**
 RFID Card ID from 1-10 as a string
Format and length: variable, depending on the version
    */
    rca: string;
    rcr: string;
    rcd: string;
    rc4: string;
    rc5: string;
    rc6: string;
    rc7: string;
    rc8: string;
    rc9: string;
    rc1: string;
    /**
RFID Card Name from 1-10
Maximum length: 10 characters
    */
    rna: string;
    rnm: string;
    rne: string;
    rn4: string;
    rn5: string;
    rn6: string;
    rn7: string;
    rn8: string;
    rn9: string;
    rn1: string;
    /**
  Load balancing enabled
0: load balancing disabled
1: Load balancing activated via cloud
    */
    loe: number;
    /**
 Load balancing group total ampere
    */
    lot: number;
    /**
 Load balancing minimum amperage
    */
    lom: number;
    /**
 Lastmanagement priority
    */
    lop: number;
    /**
 Lastmanagement group ID
    */
    log: string;
    /**
 Lastmanagement:expected number of charging stations
(currently not supported)
    */
    lon: number;
    /**
 Load balancing fallback amperage
    */
    lof: number;
    /**
 Load balancing Ampere (current permitted charging current)
is automatically controlled by the load balancing)
    */
    loa: number;
    /**
 Load balancing: seconds since the last current flow while the
car is still plugged in
0 when charging is in progress
    */
    lch: number;


}
export { EGoChargerMqqtType };