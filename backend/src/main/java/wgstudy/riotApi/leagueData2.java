package wgstudy.riotApi;

import java.io.*;
import java.net.URL;
import java.util.*;
import com.google.gson.*;

public class leagueData2 {
	
	final static String API_KEY = "RGAPI-26ab633b-e7e9-41a1-a58b-c56fc09fb1ad";
        
        

    public static void main(String[] args) throws IOException {
         
        try {
            int page = 1;
            String tier = "1";
            String result;
            URL url = new URL("https://kr.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/", tier, page, "?api_key=" + API_KEY);
            InputStream openStream = url.openStream();
            InputStreamReader Summoner = new InputStreamReader(openStream, "UTF-8");
            BufferedReader read = new BufferedReader(Summoner);
         
            while(true) {
        	    int i = 1;
                page = i;
                result = read.readLine();

        	 
            }
        } catch (Exception e) {
            
        }
    }

}