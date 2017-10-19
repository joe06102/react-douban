export class Logger {

    static exec(action, args){

        if(typeof action !== 'function'){
            action = console.log;
        }

        if(Array.isArray(args)){
            if(args.length === 1 && typeof args[0] === 'string'){
                action(args[0]);            
            }
            else{
                return (splitter) => {
                    action(args.join(splitter));                
                };
            }
        }
    }

    /**
     * log messages
     * - if there are more than 1 params passed, it returns a function that accepts a splitter to split the messages.
     * @static
     * @param {string|string[]} args 
     * @returns {(void | (splitter: string => void))}
     * @memberof Logger
     */
    static log(...args){
        return Logger.exec(console.log, args);
    }

    /**
     * info messages
     * - if there are more than 1 params passed, it returns a function that accepts a splitter to split the messages.
     * @static
     * @param {string|string[]} args 
     * @returns {(void | (splitter: string => void))}
     * @memberof Logger
     */
    static info(...args){
        return Logger.exec(console.info, args);
    }

    /**
     * warn messages
     * - if there are more than 1 params passed, it returns a function that accepts a splitter to split the messages.
     * @static
     * @param {string|string[]} args 
     * @returns {(void | (splitter: string => void))}
     * @memberof Logger
     */    
    static warn(...args){
        return Logger.exec(console.warn, args);
    }

    /**
     * error messages
     * - if there are more than 1 params passed, it returns a function that accepts a splitter to split the messages.
     * @static
     * @param {string|string[]} args 
     * @returns {(void | (splitter: string => void))}
     * @memberof Logger
     */    
    static error(...args){
        return Logger.exec(console.error, args);
    }
}