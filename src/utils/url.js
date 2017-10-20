export class Url {

    static resolve(...resources){

        let path = '';

        if(resources && resources.length > 0){

            let result = [];

            const resourceReg = /([0-9a-zA-Z\_\-\.]+)/g;

            resources.forEach(value => {
                var match = resourceReg.exec(value);
                while(match){
                    result.push(match[1]);
                    match = resourceReg.exec(value);
                }
            });

            path = result.join('/');
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