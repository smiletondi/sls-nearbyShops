import React from 'react'

function Dashboard() {
    return (
        <div>
            <h1>Hello</h1>
            <h2>This the coding Challenge project i completed when applying to United Remote</h2>
            <p>The coding challenge is about implementing an app that lists shops nearby.</p>
            <ul>
                <li>As a User, I can sign up using my email & password</li>
                <li>As a User, I can sign in using my email & password</li>
                <li>As a User, I can display the list of shops sorted by distance</li>
                <li>As a User, I can like a shop, so it can be added to my preferred shops
                    <ul>
                        <li>
                            Liked shops are not be displayed on the main page
                        </li>
                    </ul>
                </li>
                <li>As a User, I can dislike a shop, so it won’t be displayed within “Nearby Shops” list during the next 2 hours
                    <ul>
                        <li>It won't be displayed only in the UI, refreshing the page will bring it back</li>
                    </ul>
                </li>
                <li>As a User, I can display the list of preferred shops</li>
                <li>As a User, I can remove a shop from my preferred shops list</li>
            </ul>
        </div>
    )
}

export default Dashboard;
