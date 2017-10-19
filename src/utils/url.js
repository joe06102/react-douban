export class Url {

    static resolve(...resources){

        let path = '';

        if(resources && resources.length > 0){
            path = resources.join('/');
        }
        else{
            console.log(`resolve url failed, resources: ${resources}`);
            path = '';
        }

        return path;
    }

    static spliceQueryString(dict){
        
        let qs = '';
        
        if(dict && typeof dict === 'object' && !Array.isArray(dict)){

            const keyValuePairs = Object.keys(dict).map(key => {
                return `${key}=${dict[key]}`;
            })

            qs = keyValuePairs.join('&');
        }

        return qs;
    }
}