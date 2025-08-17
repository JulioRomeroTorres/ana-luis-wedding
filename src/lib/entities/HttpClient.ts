import { DEFAULT_HEADERS } from "../Constants";

export class HttpClient {
	private readonly baseUrl: string;
	private readonly headers: Record<string, string>;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl
		this.headers = {}
	}

	setDefaultHeaders(): void {

	}
	
	async post(endPoint: string, payload: any): Promise<any> {
		try {
			const totalUrl =  endPoint ? `${this.baseUrl}/${endPoint}` : this.baseUrl;

			const response = await fetch( totalUrl, {
				method: "POST",
				body: JSON.stringify(payload),
				headers: DEFAULT_HEADERS
			});

			console.log(`Response Post ${JSON.stringify(response)}`);

			if (response.ok) {
				return response.body;
			}

			throw new Error("Error");

		} catch (error) {
			console.log("Error",error)
			throw new Error(`Error to post method ${error}`);
		}
	}
}


const handleSubmit = async () => {    
  
  const data = {
    name: "Julio",
    lastName: "Romero",
    relationship: "Amigo",
    numberOfCompanios: 0,
    email: "jcromerot@uni.pe",
    hadAttended: true
  };

  
};
await handleSubmit()