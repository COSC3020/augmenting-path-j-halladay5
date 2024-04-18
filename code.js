function augmentingPath(graph, start, end, path = [], visited = [])
{
    path.push(start);
    
    if(start == end)
    {
        return path;
    }
    
    visited.push(start);
    
    for(var key in graph[start])
    {
        if(!path.includes(key) || !visited.includes(key))
        {
            if(key == end)
            {
                path.push(key);
                return path;
            }
            visited.push(key);
            var newPath = augmentingPath(graph, key, end, path, visited);
            
            if(newPath.length > 0)
            {
                return newPath;
            }
            
            path = [];
            path.push(start);
        }
    }
    return [];
}

