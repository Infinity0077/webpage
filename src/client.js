import client from "@sanity/client"

export default client({
    
        projectId: 'kpbrb6pc',
        dataset: 'production',
        token: 'skYTk42NRHVq8zxggjxtTpn28lSR2Yj6ThbV7wYr3cUbzN1Bn56teHFdXBuWBfd6JYqLYr1FeqkN5yEBNPUuB4mmwDaOkdxY345sW2mlYfgJ778rmXM17VoxGH9kTUUQxMHEmFg8t6m85xAkAnqxwVOKDLXUx421JDXR8WAq5IxeheNWCKAk',
        apiVersion: 'v1',
        useCdn: false // `false` if you want to ensure fresh data,
      })