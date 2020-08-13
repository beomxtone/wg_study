import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.*;


public class RiotAPIAccount {
    public static List<String> leagueTier(String tier) throws IOException {
        int page = 1;
        String info;
        List <String> json = new ArrayList<String>();
        URL url = new URL("https://kr.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/",tier, page, "&api_key=RGAPI-8abce829-705a-467a-83c0-d39923c30ac7");
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
        URL url = new URL(tier, "?api_key=RGAPI-8abce829-705a-467a-83c0-d39923c30ac7");
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
