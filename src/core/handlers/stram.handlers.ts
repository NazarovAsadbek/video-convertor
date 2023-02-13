import {IStreamLogger} from "./stream-logger.interface";
import {ChildProcessWithoutNullStreams} from "child_process";

export class StramHandlers {
    constructor(private logger: IStreamLogger) {

    }

    proccessOutput(stream: ChildProcessWithoutNullStreams) {
        stream.stdout.on("data", (data: any) => {
            this.logger.log(data);
        });
        stream.stderr.on("data", (data: any) => {
            this.logger.log(data);
        });
        stream.on("close", () => {
            this.logger.end();
        });
    }

}