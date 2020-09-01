package wgstudy.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@RestController
public class SubController {
	@RequestMapping(value="/enemy/{champion_name}/counters", method=RequestMethod.GET)
	public String getCounters() {
		// 설계 단계의 수정이 필요할듯?? JsonObject 사용시 jsontype 패키지 삭제
		// champion_name 사용법 학습 필요
		JsonObject obj = new JsonObject();
		JsonObject counterInfo = new JsonObject();
		JsonArray line = new JsonArray();
		JsonArray top = new JsonArray();
		JsonArray jg = new JsonArray();
		JsonArray mid = new JsonArray();
		JsonArray ad = new JsonArray();
		JsonArray sup = new JsonArray();
		
		String[] championLine = {"top", "mid"};
		String[] topCounters = {"Hecarim", "Olaf", "Quinn"};
		String[] midCounters = {"Katarina", "Ahri", "Qiyana"};
		
		counterInfo.addProperty("Hecarim", 40);
		counterInfo.addProperty("Olaf", 42);
		counterInfo.addProperty("Quinn", 42);
		counterInfo.addProperty("Katarina", 42);
		counterInfo.addProperty("Ahri", 44);
		counterInfo.addProperty("Qiyana", 48);
		
		for(String str:championLine)
			line.add(str);
		
		for(String str:topCounters)
			top.add(str);
		
		for(String str:midCounters)
			mid.add(str);
		
		obj.addProperty("content_type", "json");
		obj.addProperty("result_code", 200);
		obj.add("line", line);
		obj.add("top", top);
		obj.add("jg", jg);
		obj.add("mid", mid);
		obj.add("ad", ad);
		obj.add("sup", sup);
		obj.add("counter_info", counterInfo);

		return obj.toString();
	}
	
	@RequestMapping(value="/ally/{champion_name}/cc_skills", method=RequestMethod.GET)
	public String getCC() {
		// 설계 단계의 수정이 필요할듯?? JsonObject 사용시 jsontype 패키지 삭제
		// champion_name 사용법 학습 필요
		JsonObject obj = new JsonObject();
		JsonObject ccInfo = new JsonObject();
		JsonArray ccList = new JsonArray();
		
		ccList.add("GarenQ");
		ccInfo.addProperty("GarenQ", false);
		obj.addProperty("content_type", "json");
		obj.addProperty("result_code", 200);
		obj.add("cc_list", ccList);
		obj.add("cc_info", ccInfo);
		
		return obj.toString();
	}
	
	@RequestMapping(value="/ally/{champion_name}/types", method=RequestMethod.GET)
	public String getTypes() {
		// 설계 단계의 수정이 필요할듯?? JsonObject 사용시 jsontype 패키지 삭제
		// champion_name 사용법 학습 필요
		JsonObject obj = new JsonObject();
		
		obj.addProperty("content_type", "json");
		obj.addProperty("result_code", 200);
		obj.addProperty("is_ad", true);
		obj.addProperty("is_ap", false);
		obj.addProperty("is_tank", true);
		
		return obj.toString();
	}
	
	@RequestMapping(value="/ally/{champion_name}/{line}/synergies", method=RequestMethod.GET)
	public String getSynergies() {
		// 설계 단계의 수정이 필요할듯?? JsonObject 사용시 jsontype 패키지 삭제
		// champion_name 사용법 학습 필요
		JsonObject obj = new JsonObject();
		JsonObject synergyInfo = new JsonObject();
		JsonArray top = new JsonArray();
		JsonArray jg = new JsonArray();
		JsonArray mid = new JsonArray();
		JsonArray ad = new JsonArray();
		JsonArray sup = new JsonArray();
		
		String[] jgSynergies = {"Elise", "Echo", "Karthus"};
		
		synergyInfo.addProperty("Elise", 56);
		synergyInfo.addProperty("Echo", 53);
		synergyInfo.addProperty("Karthus", 52);
		
		for(String str:jgSynergies)
			jg.add(str);
		
		obj.addProperty("content_type", "json");
		obj.addProperty("result_code", 200);
		obj.add("top", top);
		obj.add("jg", jg);
		obj.add("mid", mid);
		obj.add("ad", ad);
		obj.add("sup", sup);
		obj.add("synergy_info", synergyInfo);

		return obj.toString();
	}
}
