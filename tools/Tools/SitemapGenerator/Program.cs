using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Xml.Linq;
using static System.Console;

namespace SitemapGenerator
{
    class Program
    {
        const string basePath = "../../../docs/data/";
        const string languagesPath = basePath + "languages.json";
        const string projectsPath = basePath + "projects.json";
        const string outputPath = basePath + "sitemap.xml";
        const string baseUrl = "http://langs.bigsbyspot.org/#!/";
        const string xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9";
        readonly static string date = DateTime.Now.ToString("yyyy-MM-dd");

        static void Main(string[] args)
        {
            var languagesJson = File.ReadAllText(languagesPath);
            var projectsJson = File.ReadAllText(projectsPath);

            var langagues = JsonConvert.DeserializeObject<Dictionary<string, NamedObject>>(languagesJson);
            var projects = JsonConvert.DeserializeObject<Dictionary<string, NamedObject>>(projectsJson);

            if (File.Exists(outputPath))
                File.Delete(outputPath);

            var xDoc = new XDocument();

            xDoc.Declaration = new XDeclaration("1.0", "UTF-8", "yes");

            var root = new XElement(XName.Get("urlset", xmlns));

            foreach (string key in langagues.Keys)
                AddUrl(root, "language", key);

            foreach (string key in projects.Keys)
                AddUrl(root, "project", key);

            foreach (string first in langagues.Keys)
                foreach (string second in langagues.Keys)
                    if (first != second)
                    {
                        AddUrl(root, "compare", first, second);
                        foreach (string project in projects.Keys)
                            AddUrl(root, "compare", first, second, project);
                    }

            xDoc.AddFirst(root);

            xDoc.Save(File.OpenWrite(outputPath));

            WriteLine("Done!");
            ReadLine();
        }

        private static void AddUrl(XElement root, string relative, string first, string second = null, string third = null)
        {
            var url = new XElement(XName.Get("url", xmlns));
            url.Add(new XElement(XName.Get("loc", xmlns), baseUrl + relative + "/" + first + (string.IsNullOrEmpty(second) ? "" : "/" + second) + (string.IsNullOrEmpty(third) ? "" : "/" + third)));
            url.Add(new XElement(XName.Get("lastmod", xmlns), date));
            root.Add(url);
        }
    }

    class NamedObject
    {
        public string Name { get; set; }
    }
}