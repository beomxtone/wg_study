package wgstudy.backend;

import javax.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.JsonObject;

@RestController
public class SubController {
	@RequestMapping(value="/enemy/{champion_name}/counters", method=RequestMethod.GET)
	public String getCounters() {
		// 설계 단계의 수정이 필요할듯?? JsonObject 사용시 jsontype 패키지 삭제
		JsonObject obj = new JsonObject();

		obj.addProperty("title", "테스트3");
		obj.addProperty("content", "테스트3 내용");

		JsonObject data = new JsonObject();

		data.addProperty("time", "12:00");
		obj.add("data", data);

		return obj.toString();
	}
	
	@RequestMapping(value="/ally/{champion_name}/cc_skills", method=RequestMethod.GET)
	public ResponseEntity<String> ip (HttpServletRequest request) {
		// 더미 코드
		return ResponseEntity.ok(request.getRemoteAddr());
	}
	
	@RequestMapping(value="/ally/{champion_name}/types", method=RequestMethod.GET)
	public ResponseEntity<String> ip (HttpServletRequest request) {
		// 더미 코드
		return ResponseEntity.ok(request.getRemoteAddr());
	}
	
	@RequestMapping(value="/ally/{champion_name}/{line}/synergies", method=RequestMethod.GET)
	public ResponseEntity<String> ip (HttpServletRequest request) {
		// 더미 코드
		return ResponseEntity.ok(request.getRemoteAddr());
	}
}
