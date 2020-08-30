package wgstudy.backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BasicController {
	@RequestMapping("/home")
	public String getHomePage() {
		return "/main.html";
	}
	
	@RequestMapping("/index")
	public String getIndexPage() {
		return "/index.html";
	}
}
