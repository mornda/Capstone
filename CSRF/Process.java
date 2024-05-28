import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/Process")
public class Process extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        if ("POST".equals(request.getMethod())) {
            HttpSession session = request.getSession();
            String sessionCsrfToken = (String) session.getAttribute("csrf_token");
            String requestCsrfToken = request.getParameter("csrf_token");

            if (sessionCsrfToken == null || !sessionCsrfToken.equals(requestCsrfToken)) {
                response.getWriter().write("CSRF 공격이 감지되었습니다.");
            } else {
                response.getWriter().write("CSRF 토큰이 유효합니다.");
            }
        }
    }
}
