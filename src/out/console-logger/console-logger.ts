import {IStreamLogger} from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {
    static logger: ConsoleLogger;

    public static getInstance(): ConsoleLogger {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }

        return ConsoleLogger.logger;
    }

    log(...args: any[]): void {
        console.log(...args);
    }

    error(...args: any[]): void {
        console.error(...args);
    }

    end(): void {
        console.log('Готово!')
    }
}