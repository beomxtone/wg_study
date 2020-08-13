import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.*;

public class RiotApi {
    public static void main(String[] arg) throws MalformedURLException, IOException {
        String info;
        List <String> json = new ArrayList<String>();
        URL url = new URL("https://kr.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-8abce829-705a-467a-83c0-d39923c30ac7");
        InputStream openStream = url.openStream();
        InputStreamReader Summoner = new InputStreamReader(openStream, "UTF-8");
        BufferedReader read = new BufferedReader(Summoner);
        while (true) {
            info = read.readLine();
            if(info == null){
                break;
            }
            json.add(info);
        }
        read.close();
        Summoner.close();
        int totalElements = json.size();// arrayList의 요소의 갯수를 구한다.
        for (int index = 0; index < totalElements; index++) {
         System.out.println(json.get(index));
        }
    }
}