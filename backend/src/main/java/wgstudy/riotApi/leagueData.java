package wgstudy.riotApi;

import java.io.*;
import java.net.URL;
import java.util.*;

public class leagueData {
	
	final static String API_KEY = "RGAPI-26ab633b-e7e9-41a1-a58b-c56fc09fb1ad";
	
	public static List<String> leagueTier(String tier) throws IOException {
        int page = 1;
        String info;
        List <String> json = new ArrayList<String>();
        URL url = new URL("https://kr.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/", tier, page, "?api_key=" + API_KEY);
        InputStream openStream = url.openStream();
        InputStreamReader Summoner = new InputStreamReader(openStream, "UTF-8");
        BufferedReader read = new BufferedReader(Summoner);
        
        while (true) {
            info = read.readLine();
            if (info == null) {
                break;
            }
            json.add(info);

        }
        read.close();
        Summoner.close();
        return json;
    }

	public static List<String> leagueTier(URL tier) throws IOException {
        String info;
        List <String> json = new ArrayList<String>();
        URL url = new URL(tier, "?api_key=" + API_KEY);
        InputStream openStream = url.openStream();
        InputStreamReader Summoner = new InputStreamReader(openStream, "UTF-8");
        BufferedReader read = new BufferedReader(Summoner);
        while (true) {
            info = read.readLine();
            if (info == null) {
                break;
            }
            json.add(info);
        }
        read.close();
        Summoner.close();
        return json;
    }

    public static void main(String[] args) throws IOException {
        leagueTier("DIAMOND/I?page=");
    }

}