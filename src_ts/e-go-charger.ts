import { NodeProperties, Red, Node } from "./node-red-types"
import { EGoCharger } from "./EGoCharger";




interface MyNodeProperties extends NodeProperties {
}

interface MyNode extends Node {
}




const func = (RED: Red) => {
    const eGoCharger = function (config: MyNodeProperties) {

        this.eGoCharger = new EGoCharger();
        const node: MyNode = this;

        RED.nodes.createNode(node, config);


        /** 
         * Nodes register a listener on the input event 
         * to receive messages from the up-stream nodes in a flow.
        */
        node.on("input", async function (msg, send, done) {
            try {
                // For maximum backwards compatibility, check that send exists.
                // If this node is installed in Node-RED 0.x, it will need to
                // fallback to using `node.send`
                // eslint-disable-next-line prefer-spread, prefer-rest-params
                send = send || function () { node.send.apply(node, arguments) }

                const eGoCharger = ((node as any).eGoCharger) as EGoCharger;


                const message = JSON.parse(msg.payload);
                if (message !== undefined && message !== null) {

                    const influxDbMessage = eGoCharger.getMessageForInfluxDb(message);

                    send([{ payload: influxDbMessage }]);


                }

            }
            catch (e: unknown) {
                console.error(e);
            }

            // Once finished, call 'done'.
            // This call is wrapped in a check that 'done' exists
            // so the node will work in earlier versions of Node-RED (<1.0)
            if (done) {
                done();
            }


        });


        /** 
         * Whenever a new flow is deployed, the existing nodes are deleted. 
         * If any of them need to tidy up state when this happens, such as 
         * disconnecting from a remote system, they should register a listener 
         * on the close event.
        */
        node.on('close', function (removed: boolean, done: () => void) {
            if (removed) {
                // This node has been disabled/deleted
            } else {
                // This node is being restarted
            }
            done();
        });

    }
    RED.nodes.registerType("e-go-charger", eGoCharger);
}

module.exports = func;