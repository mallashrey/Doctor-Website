export const formateDate =(date, config)=>{
    const defaultOptions = { day: "numeric", month: "short", year: "numeric"};
    const options = config?config:defaultOptions;

    return new Date(date).toLocaleDateString("en-US", options);
}

/*defaultOptions is an object that defines the default way to format the date. 
Configurable Options:


const options = config ? config : defaultOptions;
This line uses a ternary operator to determine the formatting options. If config is provided, it will use config; otherwise, it will fall back to the defaultOptions.

return new Date(date).toLocaleDateString("en-US", options);
new Date(date) converts the date parameter into a Date object. This is necessary to ensure the date can be formatted, regardless of the initial format of date.
.toLocaleDateString("en-US", options) formats the date into a string based on the locale and options provided. In this case, "en-US" specifies that the date should be formatted in a style commonly used in the United States. The options parameter defines how the day, month, and year should be displayed.

*/