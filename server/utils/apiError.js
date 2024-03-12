class ApiError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith(4)?'failed':'error';
        this.isOpertional=true
    }
}
export  default ApiError 