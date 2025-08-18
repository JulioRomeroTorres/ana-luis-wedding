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
			console.log("HttpClient", JSON.stringify({payload}))
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

	async handleSubmit(){    
		const BASE_URL = "https://script.google.com/macros/s/AKfycbzwdx7XIdwm2euyYJ929hh8vWKlnF8W1cBL4OE7xEoJEswF1gYfysBG4y1-2L0cvphCNA/exec"
	const data = {
		"attendingCeremony":true,
		"attendingParty":false,
		"attendingBoth":false,
		"lastName":"Romero Torreddcdscsddd",
		"firstName":"Juliodff",
		"email":"jcromerot@uni.pedddddddccddddd"
	};

	try {
		const response = await fetch( BASE_URL, {
		method: "POST",
		redirect: "follow",
		body: JSON.stringify(data),
		headers: { "Content-Type": "text/plain" }
		});
		console.log("response ", response)
		if (response.ok) {
		console.log("¡Confirmado! Gracias por responder.");
		} else {
		console.log("Hubo un error. Intenta de nuevo.");
		}
	} catch (error) {
		console.log("Error",error)
		console.log("Error de conexión.");
	}
	};
}
