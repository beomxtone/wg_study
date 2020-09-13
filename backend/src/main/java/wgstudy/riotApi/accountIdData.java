package wgstudy.riotApi;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

import com.google.gson.*;

public class accountIdData {
	final static String API_KEY = "RGAPI-26ab633b-e7e9-41a1-a58b-c56fc09fb1ad";
	String SummonerName;
	
	public accountIdData() throws Exception {
		
		String search_word;
		String SummonerName = null;
		URL url;
		URLConnection urlConn;
		BufferedReader br;
		
		try {
			search_word = URLEncoder.encode("소환사 이름", "UTF-8");
			url = new URL("https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" + SummonerName + "?api_key=" + API_KEY);
            urlConn = url.openConnection();
            String auth = "?api_key=" + API_KEY;
            urlConn.setRequestProperty("Authorization", auth);
			
			br = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));
			
			
			
			String result = "";
			String line;
			
			while((line = br.readLine()) != null) {
				result = result + line;
            }
            
            System.out.println(result);
			
			/*
			JsonParser jsonParser = new JsonParser;
			JsonObject k = (JsonObject) jsonParser.parse(br);
			String accountId = k.get("accountId").getAsString();
			*/
			
			
			
		} catch (Exception e) {
		
		}
	}
	
}
