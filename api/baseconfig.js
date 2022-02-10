var baseconfig={};
 
if(process.env.NODE_ENV === 'development'){
	baseconfig = {
		server:'http://192.168.1.43:8012'
	}
}else if(process.env.NODE_ENV === 'production'){
	baseconfig = {
		server:'http://production.test.net'
	}
}
 
export default baseconfig;