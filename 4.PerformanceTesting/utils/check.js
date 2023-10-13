import { check } from "k6";
// tags :{
//   my_tags : "check response"
// }
export function getcheck(res) {
    
    check(res, {
		'responsenya harus 200': (r) => r.status === 200,
    }
    )}




