import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.*;


public class RiotAPIAccount {
    
    public static void main(String[] arg) throws MalformedURLException, IOException {
        URL url = new URL("https://kr.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-94b8ac4d-5d9c-4cc4-ac37-ab8e69176465");
        InputStream openStream = url.openStream();
        InputStreamReader Summoner = new InputStreamReader(openStream, "UTF-8");
        BufferedReader read = new BufferedReader(Summoner);
        while (true) {
            String info = read.readLine();
            if(info == null){
                break;
            }
            System.out.println(info);
        }
        read.close();
        Summoner.close();
    }
}