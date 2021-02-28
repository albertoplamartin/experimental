import { HttpParams } from "@angular/common/http";

export interface UrlIdentifier {
    url: string;
    httpParams?: HttpParams;
}