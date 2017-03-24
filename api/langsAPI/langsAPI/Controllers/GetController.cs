using Microsoft.AspNetCore.Mvc;

namespace langsAPI.Controllers
{
    public class GetController : Controller
    {
        public string Get()
        {
            return "Content from HTTP request";
        }
    }
}