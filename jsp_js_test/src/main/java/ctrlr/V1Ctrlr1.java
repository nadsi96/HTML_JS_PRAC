package ctrlr;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.*;
import org.json.simple.parser.*;

/**
 * Servlet implementation class V1Ctrlr1
 */
@WebServlet("/v1ctrlr1")
public class V1Ctrlr1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public V1Ctrlr1() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("doGet");
		System.out.println("Served at: " + request.getContextPath());
		doAction(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("doPost");
		doGet(request, response);
	}
	private void doAction(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		System.out.println("doAction");
		System.out.println(req.getParameter("data"));
		req.getSession().setAttribute("in1", req.getParameter("in1"));
		System.out.println(req.getParameter("in1"));
		
		JsonDataManager jsonManager = JsonDataManager.getInstance();
		JSONObject jObj = jsonManager.parse(req.getParameter("data"));
		System.out.print("jObj = ");
		System.out.println(jObj);
		if(jObj == null) {
			System.out.println("data is null");
			res.sendError(588, "data is null");
//			error msg 넘기는것 확인
//			fetch - 코드, 메시지 넘어감
//			ajax  - 코드만 확인가능한듯
			return;
		}
		
		System.out.println("===================");
		if(req.getParameter("fetch") != null) {
			jObj.put("pageUrl", "/test1/view/view2.jsp");
//			res.sendRedirect("/test1/view/view2.jsp");
			res.getWriter().write(jsonManager.stringify(jObj));
			res.sendRedirect("/test1/pageController");
//			res.getWriter().write("{\"url\": \"/test1/view/view2.jsp\"}");
//			res.sendRedirect("/test1/view/view2.jsp");
		}
		else if(req.getParameter("ajax") != null) {
			System.out.println("==============");
			jObj.put("pageUrl", "/test1/view/view2.jsp");
			System.out.println(jsonManager.stringify(jObj));
			res.getWriter().write(jsonManager.stringify(jObj));
		}
		else if(req.getParameter("form2") != null) {
			res.getWriter().write("{\"url\": \"/test1/view/view2.jsp\","
					+ "\"data\": {\"out1\": [1,2,3]}}");
		}
		else {
			res.sendRedirect("/test1/view/view2.jsp");
		}
	}
}
