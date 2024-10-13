import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface ConfigData {
  maintenanceTo: string | null;
  siteTagLine: string;
  productVersion: string;
  maintenanceFrom: string | null;
  siteLogo: string;
  preMaintenanceMsg: string | null;
  maintenanceMsg: string | null;
}

interface ConfigResponse {
  data: ConfigData;
  message: string;
  success: boolean;
  code: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private baseApiUrl = `${environment.apiUrl}/api/configuration`;

  constructor(private http: HttpClient) {}

  getConfig(category: string): Observable<ConfigResponse> {
    const requestPayload = { category : category };
    return this.http.post<ConfigResponse>(`${this.baseApiUrl}/fetch-configs`, requestPayload);
  }
}
