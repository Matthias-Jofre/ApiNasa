"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const product_dto_1 = require("./dto/product.dto");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createPost(res, createProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Producto creado',
            product
        });
    }
    async getProducts(res) {
        const products = await this.productService.getProducts();
        return res.status(common_1.HttpStatus.OK).json({
            products
        });
    }
    async getProduct(res, productID) {
        const product = await this.productService.getProduct(productID);
        if (!product)
            throw new common_1.NotFoundException("error");
        return res.status(common_1.HttpStatus.OK).json(product);
    }
    async deleteProduct(res, ProductID) {
        const productDeleted = await this.productService.deleteProduct(ProductID);
        if (!productDeleted)
            throw new common_1.NotFoundException('Producto no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'producto eliminado',
            productDeleted
        });
    }
    async updateProduct(res, createProductDTO, productID) {
        const updateProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updateProduct)
            throw new common_1.NotFoundException('Producto no existe');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'actualizado correctamente',
            updateProduct
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createPost", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    common_1.Get('/:productID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Res()), __param(1, common_1.Query('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Query('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
ProductController = __decorate([
    swagger_1.ApiTags('Product'),
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map