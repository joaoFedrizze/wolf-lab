import { SplashtextService } from './splashtext.service';
export declare class SplashtextController {
    private readonly splashtextService;
    constructor(splashtextService: SplashtextService);
    getAll(): {
        splashtexts: string[];
    };
}
