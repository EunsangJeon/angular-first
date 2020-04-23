import { Pipe, PipeTransform } from '@angular/core'

// pipe is also neede to be added to module

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?: number) {
        if (!value)
            return null;
        let actualLimit = (limit) ? limit : 50;
        return value.substring(0, limit) + "...";
    }
}