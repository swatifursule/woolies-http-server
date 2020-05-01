import adminApp from '../firebase'
import { string } from 'yup'
import axios from 'axios'
import { get, orderBy, find } from 'lodash'
import {
	ERROR_CODES,
	HTTP400Error,
	HTTP404Error,
	HTTPClientError
} from '../../utils/httpErrors'



export async function getProducts() {
	return axios({
		url: 'http://dev-wooliesx-recruitment.azurewebsites.net/api/resource/products?token=b701ad68-57e0-46b2-aaec-77d58e86cea1',
		method: 'get',

	  })
}
export async function getShopperHistory() {
	return axios({
		url: 'http://dev-wooliesx-recruitment.azurewebsites.net/api/resource/shopperHistory?token=b701ad68-57e0-46b2-aaec-77d58e86cea1',
		method: 'get',

	  })
}

enum SortOption {
    Low = "Low", // Low to High Price
    High = "High", //High to Low Price
    Ascending = "Ascending", // A - Z sort on the Name
    Descending = "Descending", // Z - A sort on the Name
	Recommended = "Recommended" //"shopperHistory" resource  based on popularity
}
export async function sort(sortOpt: string) {
	return getProducts().then(response => {
		//console.log("response ", response)
		let products = response.data
		let orderProducts
		if (sortOpt === SortOption.Low){
			orderProducts = orderBy(products, ['price'],['asc']); // Use Lodash to sort array by 'price'
		}else if (sortOpt === SortOption.High){
			orderProducts = orderBy(products, ['price'],['desc']); // Use Lodash to sort array by 'price'
		}else if (sortOpt === SortOption.Ascending){
			orderProducts = orderBy(products, ['name'],['asc']); // Use Lodash to sort array by 'name'

		}else if (sortOpt === SortOption.Descending){
			orderProducts = orderBy(products, ['name'],['desc']); // Use Lodash to sort array by 'name'
		}else{
			// get shopper history based on popularity(assuming quantity)
			orderProducts = getShopperHistory().then(response => {
				let allCustomers = response.data
			
				let allProducts :any[] = []
				allCustomers.forEach((customer:any) => {
					let custProducts = customer.products;
					
					custProducts.forEach((prod: any) => {
						let index = allProducts.findIndex(p => p.name === prod.name)
						
						if (index == -1){
							//not found, means add to allProducts
							allProducts.push(prod)
							
						}else{
							// else add quanities
							allProducts[index].quantity = allProducts[index].quantity + prod.quantity
						}

					})
					
				})
				return orderBy(allProducts, ['quantity'], ['desc'])
			})
		}
		return orderProducts
	}).catch(err => console.log("error is ", err))
}