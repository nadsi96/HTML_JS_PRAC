package ctrlr;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

/**
 * Servlet implementation class PageController
 */
@WebServlet("/pageController")
public class PageController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public PageController() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("Served at: " + request.getContextPath());
		doAction(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	private void doAction(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		System.out.println("\npageController");
		String url = req.getParameter("pageUrl");
		String data = req.getParameter("data");
		System.out.print("url: ");
		System.out.println(url);
		
		JsonDataManager jsonManager = JsonDataManager.getInstance();
		JSONObject jObj = jsonManager.parse(req.getParameter("data"));
		if(jObj == null) {
			res.sendError(500, "data is null");
			return;
		}
		jObj.put("pageUrl", url);
		
//		System.out.println("--------------------");
//		Enumeration en = req.getParameterNames();
//		String returnData = "{";
//		while(en.hasMoreElements()) {
//			String k = (String) en.nextElement();
//			String v = req.getParameter(k);
//			if(v != null) {
//				returnData += "\"" + k + "\": \"" + v + "\",";
//			}
//		}
//		returnData = returnData.substring(0, returnData.length()-1);
//		returnData += "}";
//		System.out.println(returnData);
//		System.out.println("--------------------");

		System.out.println("=====================");
		System.out.print("jObj: ");
		System.out.println(jObj);
		System.out.println("====================");

		String returnData = jsonManager.stringify(jObj);
		System.out.print("returnData: ");
		System.out.println(returnData);
		if (url != null && url.length() > 0) {
//			RequestDispatcher rd = req.getRequestDispatcher(url);
//			req.setAttribute("dataSet", returnData);
//			rd.forward(req,  res);
			

//			req.getSession().setAttribute("dataset", dataSet);
//			res.sendRedirect(url);
			req.getSession().setAttribute("data", returnData);
			res.getWriter().write(returnData);

		}
	}
}
