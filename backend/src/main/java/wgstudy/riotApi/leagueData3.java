package wgstudy.riotApi;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import com.google.gson.*;
import com.google.gson.JsonParser;

public class leagueData3 {
	
	final static String API_KEY = "RGAPI-26ab633b-e7e9-41a1-a58b-c56fc09fb1ad";
        
        

    public static void main(String[] args) throws IOException {
    	 int page = 1;
         String tier = "I";
         URL url = new URL("https://kr.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/DIAMOND/I?page=1&api_key=RGAPI-26ab633b-e7e9-41a1-a58b-c56fc09fb1ad");
         HttpURLConnection con = (HttpURLConnection) url.openConnection();
         con.setRequestMethod("GET");
         //con.getResponseCode();
         
         
         BufferedReader read = new BufferedReader(new InputStreamReader(con.getInputStream()));
         String inputLine;
         StringBuffer response = new StringBuffer();
         
         while((inputLine = read.readLine()) != null) {
        	 response.append(inputLine);
         }
         
         System.out.println(response);


         //테스트

         
         JsonParser jsonParser = new JsonParser();
         JsonArray jsonArray = (JsonArray) jsonParser.parse(read);
         JsonObject k = (JsonObject) jsonArray.get(1);
         String accountId = k.get("accountId").getAsString();
         System.out.println(accountId);
         

    }
}
