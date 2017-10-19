import { Url } from '../utils/url';

export class FetchFactory {

    static fetchByIdFactory(resource, funcName){
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

    static fetchByResourceFactory(resource, funcName){
        return qs => {
            return new Promise((resolve, reject) => {
                
                reject = reject || Logger.error;
    
                if(isNaN(Number(id))){
                    const error = `id: ${id} must be number type`;
                    reject(error);
                }
                
                const queryString = Url.spliceQueryString(qs);
                const path = `/${Url.resolve(this.path, resource)}/${id}?${queryString}`;  
    
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