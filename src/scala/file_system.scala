object FileSystem extends App {
    import java.io.File

    val directory = new File("../files")

    for (folderItem <- directory.listFiles.filter(_.isDirectory)){
        println(s"/${folderItem.getName}")
    }

    for (fileItem <- directory.listFiles.filter(_.isFile)){
        println(s"${fileItem.getName},${fileItem.length}B")
    }
}