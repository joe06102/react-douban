import { Url } from '../utils/url';
import { Logger } from '../utils/logger';

export class FetchFactory {

    constructor(path){
        this.path = path;
    }

    fetchByIdFactory(resource, funcName){
        return id => {
            return new Promise((resolve, reject) => {
                
                reject = reject || Logger.error;
    
                if(isNaN(Number(id))){
                    const error = `id: ${id} must be number type`;
                    reject(error);
                }
        
                const path = `/${Url.resolve(this.path, resource)}/${id}`;  
    
                fetch(path).then(res => {
                    if(res.status === 200){
                        res.json().then(data => resolve(data));
                    }
                    else{
                        reject(`${funcName} failed, status: ${res.status}, error: ${res.statusText}`);
                    }
                });
    
            });            
        };
    }

    fetchByResourceFactory(resource, funcName){
        return qs => {
            return new Promise((resolve, reject) => {
                
                reject = reject || Logger.error;
                
                const queryString = Url.spliceQueryString(qs);
                const path = `/${Url.resolve(this.path, resource)}?${queryString}`;  
    
                fetch(path).then(res => {
                    if(res.status === 200){
                        res.json().then(data => resolve(data));
                    }
                    else{
                        reject(`${funcName} failed, status: ${res.status}, error: ${res.statusText}`);
                    }
                });
    
            });            
        };
    }    

}