import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';
import { Observable as __Observable, throwError, from } from 'rxjs';
import { map as __map, filter as __filter, catchError, retry } from 'rxjs/operators';
import { AuthenticationCheckService } from '../auth/authentication-check.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  authToken;
  constructor(private httpClient: HttpClient, protected config: ApiConfiguration, private auth: AuthenticationCheckService) {
    this.authToken = auth.getAuthToken();
  }


  // Get details from server
  public get(url: any): __Observable<[]> {
    let headers = { 'Content-Type': 'application/json' };
    return this.httpClient.get<any>(url, { responseType: 'json' })
      .pipe(
        catchError(this.handleError)
      )
  }

  public getHeaders(url: any): __Observable<any> {
    return this.httpClient.get<any>(url, { observe: 'response' });
  }

  public getFullResponse(url: any): __Observable<any> {
    return this.httpClient.get<any>(url, { observe: 'response' }).pipe(catchError(this.handleError))
  }

  // post details to server
  public post(url, data: any): __Observable<any> {
    let headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post<any>(url, data, httpOptions).pipe(catchError(this.handleError))
  }

  // put details to server
  public put(url, data: any): __Observable<any> {
    let headers = { 'Content-Type': 'application/json' };
    return this.httpClient.put<any>(url, data, httpOptions).pipe(catchError(this.handleError))
  }

  // put details to server
  public delete(url, data: any): __Observable<any> {
    let headers = { 'Content-Type': 'application/json' };
    return this.httpClient.delete<any>(url, data).pipe(catchError(this.handleError))
  }

  public postFullResponse(url: any, data: any): __Observable<any> {
    let headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post<any>(url, data, { headers, observe: 'response' }).pipe(catchError(this.handleError))
  }

  public postWithFormData(url, data: any): __Observable<any> {
    let headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post<any>(url, data, { headers, responseType: 'json' }).pipe(catchError(this.handleError))
  }

  public postWithFormDataNew(url, data: any): __Observable<any> {
    let headers = { 'Content-Type': 'multipart/form-data' };
    return this.httpClient.post<any>(url, data, { headers }).pipe(catchError(this.handleError));
    //return this.httpClient.post(url, data).map((response: Response) => { return response; }).catch(this.handleError);
  }

  // Post with Progress report
  public upload(url, sendFile): __Observable<HttpEvent<any>> {
    return this.httpClient.post<any>(url, sendFile, { reportProgress: true, observe: 'events' }).pipe(catchError(this.handleError))
    // return this.httpClient.post<any>(url, sendFile,{reportProgress: true,observe: 'events',headers:{skip:"true"}}).pipe(catchError(this.handleError))
  }

  public upload_with_loader(url, sendFile): __Observable<HttpEvent<any>> {
    //  {reportProgress: true,observe: 'events',responseType: 'json',headers:{skip:"true",'Content-type':'undefined'}}
    return this.httpClient.post<any>(url, sendFile, { reportProgress: true, observe: 'events' }).pipe(catchError(this.handleError))
  }
  // download file from server
  // public downloadFile(url,data:any):__Observable<any>{
  //   const headers = {
  //     headers : new HttpHeaders({'Content-Type': 'application/json'})
  //   }
  //   return this.httpClient.get<any>(url,{responseType: 'json'}).pipe(catchError(this.handleError))
  // }

  // Error handling
  private handleError(response: any) {
    console.log(response);
    return throwError(response.error);
  }
  public getPostHeaders(url: any, data: any): __Observable<any> {
    return this.httpClient.post<any>(url, data, { observe: "response" });
  }

}
