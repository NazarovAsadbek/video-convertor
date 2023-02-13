import {promises} from "fs";

const {dirname, isAbsolute, join} = require('path');

export class FileService {
    private async isExist(path: string) {
        try {
            await promises.stat(path);
            return true;
        } catch (e) {
            return false;
        }
    }

    public getFilePath(path: string, name: string, ext: string): string {
        if (!isAbsolute(path)) {
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + '/' + name + '.' + ext);
    }

    async deleteFileIfExists(path: string): Promise<void> {
        if (await this.isExist(path)) {
            promises.unlink(path);
        }
    }
}