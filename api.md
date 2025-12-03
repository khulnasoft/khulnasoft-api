# Pet

Params Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetParam">PetParam</a>

Response Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Pet">Pet</a>
- <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetUploadImageResponse">PetUploadImageResponse</a>

Methods:

- <code title="post /pet">client.Pet.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetService.New">New</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetNewParams">PetNewParams</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Pet">Pet</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /pet/{petId}">client.Pet.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, petID <a href="https://pkg.go.dev/builtin#int64">int64</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Pet">Pet</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="put /pet">client.Pet.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetService.Update">Update</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetUpdateParams">PetUpdateParams</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Pet">Pet</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="delete /pet/{petId}">client.Pet.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetService.Delete">Delete</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, petID <a href="https://pkg.go.dev/builtin#int64">int64</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
- <code title="get /pet/findByStatus">client.Pet.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetService.FindByStatus">FindByStatus</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, query <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetFindByStatusParams">PetFindByStatusParams</a>) ([]<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Pet">Pet</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /pet/findByTags">client.Pet.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetService.FindByTags">FindByTags</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, query <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetFindByTagsParams">PetFindByTagsParams</a>) ([]<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Pet">Pet</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="post /pet/{petId}">client.Pet.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetService.UpdateWithForm">UpdateWithForm</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, petID <a href="https://pkg.go.dev/builtin#int64">int64</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetUpdateWithFormParams">PetUpdateWithFormParams</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
- <code title="post /pet/{petId}/uploadImage">client.Pet.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetService.UploadImage">UploadImage</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, petID <a href="https://pkg.go.dev/builtin#int64">int64</a>, body <a href="https://pkg.go.dev/builtin#io.Reader">io.Reader</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetUploadImageParams">PetUploadImageParams</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#PetUploadImageResponse">PetUploadImageResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

# Store

Response Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#StoreListInventoryResponse">StoreListInventoryResponse</a>

Methods:

- <code title="get /store/inventory">client.Store.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#StoreService.ListInventory">ListInventory</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#StoreListInventoryResponse">StoreListInventoryResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

## Order

Params Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#OrderParam">OrderParam</a>

Response Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Order">Order</a>

Methods:

- <code title="post /store/order">client.Store.Order.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#StoreOrderService.New">New</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#StoreOrderNewParams">StoreOrderNewParams</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Order">Order</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /store/order/{orderId}">client.Store.Order.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#StoreOrderService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, orderID <a href="https://pkg.go.dev/builtin#int64">int64</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#Order">Order</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="delete /store/order/{orderId}">client.Store.Order.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#StoreOrderService.Delete">Delete</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, orderID <a href="https://pkg.go.dev/builtin#int64">int64</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>

# User

Params Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserParam">UserParam</a>

Response Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#User">User</a>

Methods:

- <code title="post /user">client.User.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserService.New">New</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserNewParams">UserNewParams</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/{username}">client.User.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, username <a href="https://pkg.go.dev/builtin#string">string</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="put /user/{username}">client.User.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserService.Update">Update</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, existingUsername <a href="https://pkg.go.dev/builtin#string">string</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserUpdateParams">UserUpdateParams</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
- <code title="delete /user/{username}">client.User.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserService.Delete">Delete</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, username <a href="https://pkg.go.dev/builtin#string">string</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
- <code title="post /user/createWithList">client.User.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserService.NewWithList">NewWithList</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserNewWithListParams">UserNewWithListParams</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/login">client.User.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserService.Login">Login</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, query <a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go">khulnasoftapi</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserLoginParams">UserLoginParams</a>) (<a href="https://pkg.go.dev/builtin#string">string</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/logout">client.User.<a href="https://pkg.go.dev/github.com/stainless-sdks/khulnasoft-api-go#UserService.Logout">Logout</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
